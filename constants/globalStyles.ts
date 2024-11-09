import { StyleSheet } from 'react-native';
import { HEIGHT, scale, verticalScale } from './dimensions';

export const FADING_DURATION = 500

export const globalStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        marginBottom: verticalScale(30),
        width: scale(90),
        borderRadius: scale(50),
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: verticalScale(50),
    },
    bottomAbsoluted: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginBottom: verticalScale(20)
    },
});

export const authStyles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        marginTop: HEIGHT * 0.1
    }
})