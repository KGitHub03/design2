function get(x)
{
    return document.querySelector(x)
}
function mode()
{
    if(get("#link").href.slice(-10) == "styles.css")
    {
        console.log("to dark mode");
        get("#link").href = "dark-style.css";
    }
    else if(get("#link").href.slice(-14) == "dark-style.css")
    {
        console.log("to light mode");
        get("#link").href = "styles.css";
    }
}