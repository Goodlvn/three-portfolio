$("#mssgBtn").on("click", (err) => {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    $.post("/api/contactMe", {
        name: name,
        email: email,
        message: message
    }) 
    .then(data => {
        window.location.replace("/confirmed");
    })
    .catch(handleContactErr);
    

    console.log(name, email, message);

    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
})

function handleContactErr(err) {
    $("#name").css({"border":"solid red 2px"});
    $("#email").css({"border":"solid red 2px"});
    $("#message").css({"border":"solid red 2px"});
};