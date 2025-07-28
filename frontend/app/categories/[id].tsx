import { useSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native"

const Restaurants = () => {
    const id = useSearchParams();
    
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>{id}</Text>
        </View>
    )
}

export default Restaurants;