import {
    Pressable,
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    Modal,
    Button,
    PixelRatio,
} from "react-native";
import * as Linking from "expo-linking";
import { Icon } from "@rneui/themed";

import convertCommand from "../../lib/convertDataToImage/convertCommand";
import initialFilterInput from "../../lib/initialFilterInput";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const normalizeFontSize = (size) => {
    return size / PixelRatio.getFontScale();
};

const MoveListFilterKeyboard = (props) => {
    const handleNumpadPress = (value) => {
        switch (value) {
            case "막히고": {
                if (props.filterInput.frame.hitOrGuard === "막히고") {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                hitOrGuard: "UNSELECTED",
                            },
                        };
                    });
                    break;
                } else {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                hitOrGuard: "막히고",
                            },
                        };
                    });
                }
                break;
            }
            case "맞히고": {
                if (props.filterInput.frame.hitOrGuard === "맞히고") {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                hitOrGuard: "UNSELECTED",
                            },
                        };
                    });
                    break;
                } else {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                hitOrGuard: "맞히고",
                            },
                        };
                    });
                }
                break;
            }
            case "이득이": {
                if (props.filterInput.frame.lossOrGain === "이득이") {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                lossOrGain: "UNSELECTED",
                            },
                        };
                    });
                    break;
                } else {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                lossOrGain: "이득이",
                            },
                        };
                    });
                }
                break;
            }
            case "손해가": {
                if (props.filterInput.frame.lossOrGain === "손해가") {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                lossOrGain: "UNSELECTED",
                            },
                        };
                    });
                    break;
                } else {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                lossOrGain: "손해가",
                            },
                        };
                    });
                }
                break;
            }
            case "이상": {
                if (props.filterInput.frame.aboveOrBelow === "이상") {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                aboveOrBelow: "UNSELECTED",
                            },
                        };
                    });
                    break;
                } else {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                aboveOrBelow: "이상",
                            },
                        };
                    });
                }
                break;
            }
            case "이하": {
                if (props.filterInput.frame.aboveOrBelow === "이하") {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                aboveOrBelow: "UNSELECTED",
                            },
                        };
                    });
                    break;
                } else {
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...prev,
                            frame: {
                                ...prev.frame,
                                aboveOrBelow: "이하",
                            },
                        };
                    });
                }
                break;
            }
            case "DEL": {
                props.onChangeFilterInput((prev) => {
                    return {
                        ...prev,
                        frame: {
                            ...prev.frame,
                            number: prev.frame.number.slice(0, -1),
                        },
                    };
                });
                break;
            }
            case "AC": {
                props.onChangeFilterInput((prev) => {
                    return {
                        ...prev,
                        frame: {
                            ...prev.frame,
                            number: "",
                        },
                    };
                });
                break;
            }
            default: {
                props.onChangeFilterInput((prev) => {
                    return {
                        ...prev,
                        frame: {
                            ...prev.frame,
                            number: prev.frame.number + value,
                        },
                    };
                });
                break;
            }
        }
    };

    return (
        <Modal
            transparent
            visible={props.isModalOpen}
            onRequestClose={() => {
                props.setIsModalOpen(false);
            }}
        >
            <Pressable
                onPress={() => {
                    props.setIsModalOpen(false);
                    props.onChangeFilterInput((prev) => {
                        return {
                            ...props.filterInput,
                            text: props.filterInput.text,
                        };
                    });
                }}
                style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={{ flexDirection: "row", gap: 4 }}>
                            {Object.keys(props.filterInput.feature).some(
                                (key) => props.filterInput.feature[key] === true
                            ) && (
                                <Pressable
                                    onPress={() => {
                                        props.onChangeFilterInput((prev) => {
                                            return {
                                                ...prev,
                                                feature: {
                                                    HM: false,
                                                    HT: false,
                                                    PC: false,
                                                    TN: false,
                                                },
                                            };
                                        });
                                    }}
                                >
                                    <View style={styles.showCurrentFilterItem}>
                                        {props.filterInput.feature.HM && (
                                            <Image
                                                source={require("../../assets/FeatureIcon/HMicon.png")}
                                                style={{ width: 20, height: 20 }}
                                            />
                                        )}
                                        {props.filterInput.feature.HT && (
                                            <Image
                                                source={require("../../assets/FeatureIcon/HTicon.png")}
                                                style={{ width: 20, height: 20 }}
                                            />
                                        )}
                                        {props.filterInput.feature.PC && (
                                            <Image
                                                source={require("../../assets/FeatureIcon/PCicon.png")}
                                                style={{ width: 20, height: 20 }}
                                            />
                                        )}
                                        {props.filterInput.feature.TN && (
                                            <Image
                                                source={require("../../assets/FeatureIcon/TNicon.png")}
                                                style={{ width: 20, height: 20 }}
                                            />
                                        )}
                                        <Icon name="close" size={20} color={"white"} />
                                    </View>
                                </Pressable>
                            )}
                            {props.filterInput.hitLevel.length > 0 && (
                                <Pressable
                                    onPress={() => {
                                        props.onChangeFilterInput((prev) => {
                                            return {
                                                ...prev,
                                                hitLevel: [],
                                            };
                                        });
                                    }}
                                >
                                    <View style={styles.showCurrentFilterItem}>
                                        <Text style={styles.filterChipText}>
                                            {props.filterInput.hitLevel.join(" ")}
                                        </Text>
                                        <Icon name="close" size={20} color={"white"} />
                                    </View>
                                </Pressable>
                            )}
                            {(props.filterInput.frame.hitOrGuard !== "UNSELECTED" ||
                                props.filterInput.frame.lossOrGain !== "UNSELECTED" ||
                                props.filterInput.frame.number !== "" ||
                                props.filterInput.frame.aboveOrBelow !== "UNSELECTED") && (
                                <Pressable
                                    onPress={() => {
                                        props.onChangeFilterInput((prev) => {
                                            return {
                                                ...prev,
                                                frame: {
                                                    number: "",
                                                    lossOrGain: "UNSELECTED",
                                                    hitOrGuard: "UNSELECTED",
                                                    aboveOrBelow: "UNSELECTED",
                                                },
                                            };
                                        });
                                    }}
                                >
                                    <View style={styles.showCurrentFilterCommand}>
                                        {props.filterInput.frame.hitOrGuard !== "UNSELECTED" && (
                                            <Text style={styles.filterChipText}>
                                                {props.filterInput.frame.hitOrGuard}
                                            </Text>
                                        )}
                                        {props.filterInput.frame.lossOrGain !== "UNSELECTED" && (
                                            <Text style={styles.filterChipText}>
                                                {props.filterInput.frame.lossOrGain}
                                            </Text>
                                        )}
                                        {props.filterInput.frame.number !== "" && (
                                            <Text style={styles.filterChipText}>
                                                {props.filterInput.frame.number}
                                            </Text>
                                        )}
                                        {props.filterInput.frame.aboveOrBelow !== "UNSELECTED" && (
                                            <Text style={styles.filterChipText}>
                                                {props.filterInput.frame.aboveOrBelow}
                                            </Text>
                                        )}
                                        <Icon name="close" size={20} color={"white"} />
                                    </View>
                                </Pressable>
                            )}
                            {props.filterInput.command.length > 0 && (
                                <Pressable
                                    onPress={() => {
                                        props.onChangeFilterInput((prev) => {
                                            return {
                                                ...prev,
                                                command: [],
                                            };
                                        });
                                    }}
                                >
                                    <View style={styles.showCurrentFilterItem}>
                                        {props.filterInput.command.map((item, index) => (
                                            <View key={index}>{convertCommand([item])}</View>
                                        ))}
                                        <Icon name="close" size={20} color={"white"} />
                                    </View>
                                </Pressable>
                            )}
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <View style={{ flex: 8 }}>
                                <Button
                                    title="모든 필터 초기화"
                                    onPress={() => {
                                        props.onChangeFilterInput(initialFilterInput);
                                    }}
                                    color="#EC3656"
                                />
                            </View>
                            <Pressable
                                style={{ flex: 1 }}
                                onPress={() => {
                                    Linking.openURL(
                                        "https://continuous-hearing-7ca.notion.site/a38540d97a73454986f1b4c56c5ec163"
                                    );
                                }}
                            >
                                <Icon name="help" color={"white"} size={25} />
                            </Pressable>
                            <Pressable
                                style={{ flex: 1 }}
                                onPress={() => {
                                    props.setIsModalOpen(false);
                                }}
                            >
                                <Icon name="close" color={"white"} size={25} />
                            </Pressable>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Pressable
                                style={styles.hitlevelButton}
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            hitLevel: [...prev.hitLevel, "상"],
                                        };
                                    });
                                }}
                            >
                                <Text style={styles.numpadText}>상단</Text>
                            </Pressable>
                            <Pressable
                                style={styles.hitlevelButton}
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            hitLevel: [...prev.hitLevel, "중"],
                                        };
                                    });
                                }}
                            >
                                <Text style={styles.numpadText}>중단</Text>
                            </Pressable>
                            <Pressable
                                style={styles.hitlevelButton}
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            hitLevel: [...prev.hitLevel, "하"],
                                        };
                                    });
                                }}
                            >
                                <Text style={styles.numpadText}>하단</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={
                                    props.filterInput.frame.hitOrGuard === "막히고"
                                        ? styles.numpadButtonSelected
                                        : styles.numpadButton
                                }
                                onPress={() => {
                                    handleNumpadPress("막히고");
                                }}
                            >
                                <Text style={styles.numpadText}>막히고</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={
                                    props.filterInput.frame.lossOrGain === "손해가"
                                        ? styles.numpadButtonSelected
                                        : styles.numpadButton
                                }
                                onPress={() => {
                                    handleNumpadPress("손해가");
                                }}
                            >
                                <Text style={styles.numpadText}>손해가</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("1");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>1</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("2");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>2</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("3");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>3</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("4");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>4</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("5");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>5</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("DEL");
                                }}
                            >
                                <Text style={styles.numpadText}>DEL</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={
                                    props.filterInput.frame.aboveOrBelow === "이상"
                                        ? styles.numpadButtonSelected
                                        : styles.numpadButton
                                }
                                onPress={() => {
                                    handleNumpadPress("이상");
                                }}
                            >
                                <Text style={styles.numpadText}>이상</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={
                                    props.filterInput.frame.hitOrGuard === "맞히고"
                                        ? styles.numpadButtonSelected
                                        : styles.numpadButton
                                }
                                onPress={() => {
                                    handleNumpadPress("맞히고");
                                }}
                            >
                                <Text style={styles.numpadText}>맞히고</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={
                                    props.filterInput.frame.lossOrGain === "이득이"
                                        ? styles.numpadButtonSelected
                                        : styles.numpadButton
                                }
                                onPress={() => {
                                    handleNumpadPress("이득이");
                                }}
                            >
                                <Text style={styles.numpadText}>이득이</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("6");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>6</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("7");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>7</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("8");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>8</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("9");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>9</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("0");
                                }}
                            >
                                <Text style={styles.bigNumpadText}>0</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={styles.numpadButton}
                                onPress={() => {
                                    handleNumpadPress("AC");
                                }}
                            >
                                <Text style={styles.numpadText}>AC</Text>
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                style={
                                    props.filterInput.frame.aboveOrBelow === "이하"
                                        ? styles.numpadButtonSelected
                                        : styles.numpadButton
                                }
                                onPress={() => {
                                    handleNumpadPress("이하");
                                }}
                            >
                                <Text style={styles.numpadText}>이하</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "7"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/ub.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "8"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/u.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "9"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/uf.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LP"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/1.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RP"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/2.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AP"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/12.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AL"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/13.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "4"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/b.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "N"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/n.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "6"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/f.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/3.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/4.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/34.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "AR"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/24.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "1"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/db.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "2"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/d.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "3"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/df.png")}
                                    style={styles.leverButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LPRK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/14.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "APLK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/123.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "APRK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/124.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "ALL"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/1234.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                HM: !prev.feature.HM,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/FeatureIcon/HMicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                HT: !prev.feature.HT,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/FeatureIcon/HTicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                PC: !prev.feature.PC,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/FeatureIcon/PCicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            feature: {
                                                ...prev.feature,
                                                TN: !prev.feature.TN,
                                            },
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/FeatureIcon/TNicon.png")}
                                    style={styles.featureButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RPLK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/23.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "LPAK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/134.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "RPAK"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/234.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                            <Pressable
                                android_ripple={{ color: "#ffffff" }}
                                onPress={() => {
                                    props.onChangeFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            command: [...prev.command, "일어나며"],
                                        };
                                    });
                                }}
                            >
                                <Image
                                    source={require("../../assets/MoveIcon/ws.png")}
                                    style={styles.commandButton}
                                />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: "flex-end",
    },
    content: {
        flexDirection: "col",
        width: windowWidth,
        backgroundColor: "black",
    },
    leverButton: {
        borderWidth: 1,
        width: windowWidth / 7,
        height: windowWidth / 7,
    },
    commandButton: {
        borderWidth: 1,
        width: windowWidth / 7,
        height: windowWidth / 7,
        borderColor: "white",
    },
    featureButton: {
        borderWidth: 1,
        width: (windowWidth * (3 / 7)) / 4,
        height: (windowWidth * (3 / 7)) / 4,
    },
    numpadButton: {
        borderWidth: 1,
        borderColor: "white",
        width: windowWidth / 9,
        height: windowWidth / 9,
        justifyContent: "center",
        alignItems: "center",
    },
    numpadButtonSelected: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "gray",
        width: windowWidth / 9,
        height: windowWidth / 9,
        justifyContent: "center",
        alignItems: "center",
    },
    numpadText: {
        fontSize: normalizeFontSize(14),
        fontWeight: "bold",
        color: "white",
    },
    bigNumpadText: {
        fontSize: normalizeFontSize(20),
        fontWeight: "bold",
        color: "white",
    },
    showCurrentFilterItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        padding: 4,
        margin: 4,
    },
    showCurrentFilterCommand: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        padding: 4,
        margin: 4,
        gap: 2,
    },
    pressed: {
        opacity: 0.5,
    },
    hitlevelButton: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        flex: 1,
        height: windowWidth * 0.1,
    },
    filterChipText: {
        fontSize: normalizeFontSize(14),
        color: "white",
    },
});

export default MoveListFilterKeyboard;
