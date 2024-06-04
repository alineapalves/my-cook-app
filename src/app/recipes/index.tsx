import{View, Text, FlatList} from "react-native"
import {styles} from './styles'
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Recipe } from "@/components/recipe"

export default function Recipes(){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <MaterialIcons
                name="arrow-back"
                size={32}
                onPress={() => router.back()}
            />
            </View>
            <Text style={styles.title}>Ingredientes</Text>
            <FlatList
                data={["1"]}
                keyExtractor={(item)=>item}
                renderItem={()=>(
                   <Recipe recipe={
                    {name:"Omelete",
                    image:"https://www.kitano.com.br/wp-content/uploads/2019/08/SSP_2014-Ometele-de-frios-com-cebolinha-e-salsa-1.jpg",
                    minutes: 5

                    }
                   }
                   />
                )}
            />    
        </View>
    )
}