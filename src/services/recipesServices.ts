import { supabase } from "./supabase";

async function findByIngredientesIds(ids: string[]){
    const {data} = await supabase
    .rpc("recipes_by_ingredientes", {ids})
    .returns<RecipeResponse[]>()

    return data ?? []
}

export {findByIngredientesIds}