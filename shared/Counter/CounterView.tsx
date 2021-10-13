import React from 'react';
import {Properties} from 'csstype';

export const CounterView = ({count, increment, decrement}: { count: number, increment: any, decrement: any}) => {
    const containerStyle:  Properties = {
        display: "flex", width: "50%", justifyContent: 'space-around', alignItems: 'center', flex: 1, flexDirection: 'row', backgroundColor: '#ee7767'
    };
    const styles = {
        containerStyle,
        button: {color: 'white', fontSize: 100}
    }
    return (
        <div style={styles.containerStyle}>
          <div>
            <text onClick={decrement} style={styles.button}>-</text>
          </div>
            <div>
                <text>{count}</text>
            </div>
            <div>
                <text onClick={increment} style={styles.button}>+</text>
            </div>
        </div>
    )
};
