const { openai } = require("../openai");
const express = require("express")

const debugRouter = express.Router()




debugRouter.post("/debug", async(req, res)=> {
    const { inCode} = req.body
    // console.log(inLanguage, inCode)
    // console.log(req.body)
   const prompt = `take the role of code debuger and debug the following code. The code is: \n\n ${inCode}`
//    console.log(prompt)

        try {
            
            getData(prompt, res)
        } catch (error) {
            res.status(400).json({"err": error.message})
        }
})





const getData = async(prompt, res) => {

    try {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt}],
          });
            // console.log(chatCompletion.data.choices[0].message.content);
            res.status(200).json({"msg": chatCompletion.data.choices[0].message.content})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({"err": error})
    }
    
    
      
}



module.exports = {debugRouter}