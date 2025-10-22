import { type Instance, type VirtualElement } from "@popperjs/core";
import usePopper from "../03/use-popper";

const up = usePopper()

interface UsePopperInstance {
    showTooltip(): void,
    hideTooltip(): void,
    startDrag(e: MouseEvent): void,
    stopDrag(e: MouseEvent): void,
    followEvent(e: MouseEvent): void,
    generateGetBoundingClientRectFunc(x: number, y: number): () => DOMRect,
    destroy(): void,
    // the refs
    $tooltipRef: HTMLElement,
    $ve: VirtualElement,
    $boundary: HTMLElement,
    $anchorRef: HTMLElement,
    $instance: Instance,
}

const usePopperInstance = (
    $tooltipRef: HTMLElement,
    $ve: VirtualElement,
    $anchorRef: HTMLElement,
    $boundary: HTMLElement,
    $instance: Instance
): UsePopperInstance => {
    let dragging = false

    // we are replacing $ve.getBoundingClientRect with this immediately
    const generateGetBoundingClientRectFunc = (x: number, y: number) => {
        if (!$boundary) return () => {
            return {
                width: 0, height: 0, x: 0, left: 0, right: 0, y: 0, bottom: 0, top: 0, toJSON() { }
            }
        }

        // if not dragging, just use the button's
        if (!dragging && $anchorRef) return () => {
            return $anchorRef!.getBoundingClientRect()
        }

        // dragging start
        const rect = $boundary.getBoundingClientRect()
        const clampedX = Math.min(Math.max(x, rect.left), rect.right)
        const clampedY = Math.min(Math.max(y, rect.top), rect.bottom)
        return () => {
            return {
                width: 0,
                height: 0,
                x: clampedX, // left alias
                left: clampedX, // origin
                right: clampedX, // 0+0 = 0
                y: clampedY, // top alias
                bottom: clampedY, // 0+0 = 0
                top: clampedY, // origin
                toJSON() { }, // not used
            }
        }
    }
    $ve.getBoundingClientRect = generateGetBoundingClientRectFunc(0, 0)
    // we immediately run update to use the new getBoundingClientRectangle
    // since we are not dragging, it will anchor to the nearest button
    // the placeholder $ve.getBoundingClientRect would've just placed it at 0,0
    $instance.update()

    const startDrag = (e: MouseEvent) => {
        dragging = true
        document.addEventListener('mousemove', followEvent)
        document.addEventListener('mouseup', stopDrag)
    }
    const stopDrag = (e: MouseEvent) => {
        document.removeEventListener('mousemove', followEvent)
        document.removeEventListener('mouseup', stopDrag)
    }
    const followEvent = (e: MouseEvent) => {
        const clientX = e.clientX
        const clientY = e.clientY

        $ve.getBoundingClientRect = generateGetBoundingClientRectFunc(clientX, clientY)
        if ($instance) $instance.update()
    }

    const destroy = () => {
        if ($tooltipRef) $tooltipRef.removeEventListener('mousedown', startDrag)
        if ($instance) $instance.destroy()
    }

    return {
        $tooltipRef,
        $ve,
        $anchorRef,
        $boundary,
        $instance,
        showTooltip: () => up.showTooltip($tooltipRef),
        hideTooltip: () => up.hideTooltip($tooltipRef),
        startDrag,
        followEvent,
        generateGetBoundingClientRectFunc,
        stopDrag,
        destroy,
    }
}

export default usePopperInstance