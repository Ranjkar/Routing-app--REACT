export const auth = async() => {
    let auth = await localStorage.getItem( "logedIn" );
    console.log(auth,"ajajja")
    if ( auth ) {
        return true
    }
    return false
}

export const login = async ( username, password ) => {
    if ( username == "uncinc" && password == "letmein" ) {
        await localStorage.setItem( "logedIn", true )
        return true
    }
    return false
}