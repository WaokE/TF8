import { Image, View, Text, StyleSheet, PixelRatio } from "react-native";

const normalizeFontSize = (size) => {
    return size / PixelRatio.getFontScale();
};

// 각 입력 커맨드에 해당하는 이미지들을 미리 import 해놓은 객체.
// React Native에서는 동적으로 이미지 경로를 전달할 수 없으므로, 이미지 경로를 객체로 정의하여 사용
const commandImagePath = {
    LP: require("../../assets/MoveIcon/1.png"),
    RP: require("../../assets/MoveIcon/2.png"),
    LK: require("../../assets/MoveIcon/3.png"),
    RK: require("../../assets/MoveIcon/4.png"),
    AP: require("../../assets/MoveIcon/12.png"),
    AL: require("../../assets/MoveIcon/13.png"),
    LPRK: require("../../assets/MoveIcon/14.png"),
    RPLK: require("../../assets/MoveIcon/23.png"),
    AR: require("../../assets/MoveIcon/24.png"),
    AK: require("../../assets/MoveIcon/34.png"),
    APLK: require("../../assets/MoveIcon/123.png"),
    APRK: require("../../assets/MoveIcon/124.png"),
    LPAK: require("../../assets/MoveIcon/134.png"),
    RPAK: require("../../assets/MoveIcon/234.png"),
    ALL: require("../../assets/MoveIcon/1234.png"),
    "[": require("../../assets/MoveIcon/in.png"),
    "]": require("../../assets/MoveIcon/out.png"),
    N: require("../../assets/MoveIcon/n.png"),
    1: require("../../assets/MoveIcon/db.png"),
    2: require("../../assets/MoveIcon/d.png"),
    3: require("../../assets/MoveIcon/df.png"),
    6: require("../../assets/MoveIcon/f.png"),
    9: require("../../assets/MoveIcon/uf.png"),
    8: require("../../assets/MoveIcon/u.png"),
    7: require("../../assets/MoveIcon/ub.png"),
    4: require("../../assets/MoveIcon/b.png"),
    WS: require("../../assets/MoveIcon/ws.png"),
    FC: require("../../assets/MoveIcon/FC.png"),
};

// ["RP", "LP", "RP", "LP"] 와 같은 입력 커맨드를 이미지로 변환하는 함수
export default function convertCommand(commands) {
    const result = [];
    // 커맨드 입력에는 두 가지 종류가 존재한다. '앉은 자세'와 같은 텍스트, 혹은 "LP"와 같은 커맨드
    // 입력 종류에 따라 다른 컴포넌트를 렌더링하기 위해, 입력 커맨드를 분석하여 type과 value를 가진 객체로 변환
    commands.forEach((command) => {
        if (commandImagePath[command]) {
            result.push({ type: "command", value: commandImagePath[command] });
        } else {
            result.push({ type: "text", value: command });
        }
    });
    // 변환된 결과를 렌더링
    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {result.map((data, index) => {
                if (data.type === "text")
                    return (
                        <Text key={index} style={styles.text}>
                            {data.value}
                        </Text>
                    );
                else if (data.type === "command")
                    return (
                        <Image key={index} source={data.value} style={{ width: 20, height: 20 }} />
                    );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: normalizeFontSize(14),
        color: "white",
    },
});
