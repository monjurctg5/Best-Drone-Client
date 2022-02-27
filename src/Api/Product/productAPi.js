import axios from 'axios';


// let BASE_URL ="https://hidden-inlet-96106.herokuapp.com"
let BASE_URL="http://localhost:5000"

export  let api={}

api.allProducts = async()=>{
    console.log("api call")
    let res =await axios
    .get(`${BASE_URL}/products/allProducts`)
    .then(res=>{
        return res.data
    }).catch(err=>{

        return err
    })
    return res
    
}
// get all products from heruku
// api.allProducts = async()=>{
//     console.log("api call")
   
//     let res =await axios
//     .get(`${BASE_URL}/products`)
//     .then(res=>{
//         return res.data
//     }).catch(err=>{

//         return err
//     })
//     return res
    
// }
api.addproduct = async(data)=>{
    console.log("addproduct",data)

    let res = await axios
    .post(`${BASE_URL}/products/addProduct`,data)
    .then(response=>{
        console.log(response.data)
        return response.data
    }).catch(err=>{
        console.log(err)
        return err
    })
  console.log("respose",res)
    return res
};


// 
// post a product
// api.addproduct = async(data)=>{
//     console.log("addproduct",data)
//     let res = await axios
//     .post(`${BASE_URL}/products`,data)
//     .then(response=>{
//         console.log(response.data)
//         return response.data
//     }).catch(err=>{
//         console.log(err)
//         return err
//     })
//   console.log("respose",res)
//     return res
// };

// limit product

api.homeProducts = async()=>{
    console.log("home api call")
    let res =await axios
    .get(`${BASE_URL}/products/limitProducts`)
    .then(res=>{
        console.log(res.data)
        return res.data
    }).catch(err=>{
        return []
    })
    console.log(res)
    return res
    
}

// delete a product
api.deleteProduct = async(id)=>{
    let res = await axios
    .delete(`${BASE_URL}/products/${id}`)
    .then(res=>{
        return res.data
    }).catch(err=>{
        return err
    })
    return res
}




