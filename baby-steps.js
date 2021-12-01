let rslt = 0
for( let i = 2 ; i < process.argv.lengt;i++){
    rslt +=Number(process.argv[i])
}
console.log(rslt)