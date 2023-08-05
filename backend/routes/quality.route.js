const { openai } = require("../openai");
const express = require("express")

const qualityRouter = express.Router()




qualityRouter.post("/quality", async(req, res)=> {
    const { inCode} = req.body
    // console.log(inLanguage, inCode)
    // console.log(req.body)
   const prompt = `take the role of code quality checker and check the quality of the following code with following parameters
   \n 1. Code Consistency: Evaluate the code for consistent coding style, naming conventions, and formatting.
   \n2. Code Performance: Assess the code for efficient algorithms, optimized data structures, and overall performance considerations.
   \n3. Code Documentation: Review the code for appropriate comments, inline documentation, and clear explanations of complex logic.
   \n4. Error Handling: Examine the code for proper error handling and graceful error recovery mechanisms.
   \n5. Code Testability: Evaluate the code for ease of unit testing, mocking, and overall testability.
   \n6. Code Modularity: Assess the code for modular design, separation of concerns, and reusability of components.
   \n7. Code Complexity: Analyze the code for excessive complexity, convoluted logic, and potential code smells.
   \n8. Code Duplication: Identify any code duplication and assess its impact on maintainability and readability.
   \n9. Code Readability: Evaluate the code for readability, clarity, and adherence to coding best practices.
   
   \nPlease provide a summary of the code quality assessment and a report showing the percentage-wise evaluation for each parameter mentioned above. The code is: \n\n ${inCode}`
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



module.exports = {qualityRouter}