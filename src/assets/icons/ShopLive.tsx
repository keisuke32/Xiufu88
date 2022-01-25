import React from "react";
export const ShopLiveIcon = ({color='currentColor'}) => {
    return (
        <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="shopliveMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="27">
                <rect width="28.3568" height="27" fill="url(#shoplivePattern)"/>
            </mask>
            <g mask="url(#shopliveMask)">
                <rect y="-0.787354" width="28.3568" height="28.3568" fill={color}/>
            </g>
            <defs>
                <pattern id="shoplivePattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#shopliveImage" transform="scale(0.00478469 0.00502513)"/>
                </pattern>
                <image id="shopliveImage" width="209" height="199" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAADHCAYAAACHtbZpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNDAwQTZEMEVBQ0ZFNTExQjFEQ0MyNzM4RjAwRTRDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNkE0NEU3QzEzOUMxMUVCQTcxNDk1NzgyN0NCNkFDRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNkE0NEU3QjEzOUMxMUVCQTcxNDk1NzgyN0NCNkFDRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNFREUzNzJGMTM5QjExRUI4RDgzRjcwMzMzQkJCRUY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNFREUzNzMwMTM5QjExRUI4RDgzRjcwMzMzQkJCRUY2Ii8+IDwvcmRmOkRlc2NyaXB0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"/>
            </defs>
        </svg>

    );
}
