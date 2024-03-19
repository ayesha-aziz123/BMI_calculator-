
import inquirer from "inquirer";
import chalk from "chalk"
const username =[
    {
        type : "number" ,
        name : "weight",
        message:"How much your weight (kg) ?",

    },{
        type : "number" ,
        name : "height",
        message:"How much your height (m)?"
    }

];
const calculateBMI =(weight:number , height:number)=> weight/(height*height);
const main = async() => {
    const {weight ,height} = await inquirer.prompt(username);

   console.log(`BMI ${chalk.bgBlue(calculateBMI(weight,height).toFixed(2))}`);
   
};
main();