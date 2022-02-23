const searchBtn = ()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res=>res.json())
    .then(data=>showMeals(data.meals))
}

const showMeals = (data)=>{
    console.log(data);
}