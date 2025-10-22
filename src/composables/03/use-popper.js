export default () => {
    const showTooltip = (tooltipRef) => {
        if (tooltipRef === null)
            return;
        // tooltipRef is a ref. tooltipRef.value points to an HTML element (or null)
        tooltipRef.setAttribute('data-show', '');
    };
    const hideTooltip = (tooltipRef) => {
        if (tooltipRef === null)
            return;
        tooltipRef.removeAttribute('data-show');
    };
    return {
        showTooltip,
        hideTooltip,
    };
};
