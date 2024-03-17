import { Image, View, Text, StyleSheet } from "react-native";

const commandImagePath = {
    LP: require("../assets/MoveIcon/1.png"),
    RP: require("../assets/MoveIcon/2.png"),
    LK: require("../assets/MoveIcon/3.png"),
    RK: require("../assets/MoveIcon/4.png"),
    AP: require("../assets/MoveIcon/12.png"),
    AL: require("../assets/MoveIcon/13.png"),
    LPRK: require("../assets/MoveIcon/14.png"),
    RPLK: require("../assets/MoveIcon/23.png"),
    AR: require("../assets/MoveIcon/24.png"),
    AK: require("../assets/MoveIcon/34.png"),
    APLK: require("../assets/MoveIcon/123.png"),
    APRK: require("../assets/MoveIcon/124.png"),
    LPAK: require("../assets/MoveIcon/134.png"),
    RPAK: require("../assets/MoveIcon/234.png"),
    ALL: require("../assets/MoveIcon/1234.png"),
    "[": require("../assets/MoveIcon/in.png"),
    "]": require("../assets/MoveIcon/out.png"),
    N: require("../assets/MoveIcon/n.png"),
    1: require("../assets/MoveIcon/db.png"),
    2: require("../assets/MoveIcon/d.png"),
    3: require("../assets/MoveIcon/df.png"),
    6: require("../assets/MoveIcon/f.png"),
    9: require("../assets/MoveIcon/uf.png"),
    8: require("../assets/MoveIcon/u.png"),
    7: require("../assets/MoveIcon/ub.png"),
    4: require("../assets/MoveIcon/b.png"),
    "6-": require("../assets/MoveIcon/fh.png"),
    WS: require("../assets/MoveIcon/ws.png"),
    FC: require("../assets/MoveIcon/FC.png"),
};

export default function convertCommand(commands) {
    const result = [];
    commands.forEach((command) => {
        if (commandImagePath[command]) {
            result.push({ type: "command", value: commandImagePath[command] });
        } else {
            result.push({ type: "text", value: command });
        }
    });
    return (
        <View style={{ flexDirection: "row" }}>
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

// export default function convertCommand(commands) {
//     const result = [];
//     const commandsArray = commands.split(",");
//     commandsArray.forEach((command) => {
//         const inputs = command.split("");
//         // 레버 입력이 있다면, 처리
//         const lever = [];
//         while (
//             inputs[0] === "U" ||
//             inputs[0] === "D" ||
//             inputs[0] === "F" ||
//             inputs[0] === "B" ||
//             inputs[0] === "W" ||
//             inputs[0] === "S"
//         ) {
//             lever.push(inputs.shift());
//         }
//         if (inputs[0] === "+") inputs.shift();
//         if (lever.length > 0)
//             result.push({ type: "command", value: commandImagePath[lever.join("")] });
//         // 나머지 버튼 입력 처리
//         if (inputs[0] === "{") result.push({ type: "text", value: inputs.join("") });
//         else if (inputs.length > 0)
//             result.push({ type: "command", value: commandImagePath[inputs.join("")] });
//     });

//     return (
//         <View style={{ flexDirection: "row" }}>
//             {result.map((data, index) => {
//                 if (data.type === "text")
//                     return (
//                         <Text key={index} style={styles.text}>
//                             {data.value}
//                         </Text>
//                     );
//                 else if (data.type === "command")
//                     return (
//                         <Image key={index} source={data.value} style={{ width: 20, height: 20 }} />
//                     );
//             })}
//         </View>
//     );
// }

const styles = StyleSheet.create({
    text: {
        color: "white",
    },
});