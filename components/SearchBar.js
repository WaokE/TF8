import { View, TextInput, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

const SearchBar = ({ placeholder, onChangeText }) => {
    return (
        <View style={styles.searchInputContainer}>
            <Icon name="search" color="#6B6B6B" size={20} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#6B6B6B"}
                style={styles.searchInput}
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#202124",
        padding: 8,
        marginHorizontal: 10,
        gap: 10,
        borderRadius: 5,
    },
    searchInput: {
        color: "white",
        flex: 1,
    },
});

export default SearchBar;