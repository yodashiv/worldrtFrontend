import React, { memo } from 'react'
import { useTheme } from '@nivo/core'

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
};

const TableTooltip = memo(({ title, rows, renderContent }) => {
    const theme = useTheme();

    if (!rows.length) return null;

    let content;
    if (typeof renderContent === 'function') {
        content = renderContent()
    } else {
        content = (
            <div>
                {title && title}
                <table style={{ ...tableStyle, ...theme.tooltip.table }}>
                    <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            {row.map((column, j) => (
                                <td key={j} style={theme.tooltip.tableCell}>
                                    {column}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return <div style={theme.tooltip.container}>{content}</div>
});

const Chip = ({ color }) => (
    <span style={{ display: 'block', width: '12px', height: '12px', background: color }} />
);

const SliceTooltip = ({ slice, axis }) => {
    const otherAxis = axis === 'x' ? 'y' : 'x';

    return (
        <TableTooltip
            rows={slice.points.map(point => [
                <Chip key="chip" color={point.serieColor} />,
                <strong key="value">{point.data[`${otherAxis}Formatted`]}</strong>,
                point.data.xFormatted,
            ])}
        />
    )
};

export default memo(SliceTooltip);
