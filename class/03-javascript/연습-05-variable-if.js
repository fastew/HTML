if(1+1 ===2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM394:2 정답입니다
// undefined
if(true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM431:2 정답입니다
// undefined
if(!true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM478:4 틀렸습니다
// undefined
if(0){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM496:4 틀렸습니다
// undefined

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}

if(profile.age >=20){
    console.log("성인입니다")
} else if(profile.age >= 8){
    console.log("학생입니다")
} else console.log("어린이입니다")
