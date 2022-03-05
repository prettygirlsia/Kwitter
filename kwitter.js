function addUser()
{
    username=document.getElementById("User_Name").value;
    localStorage.setItem("User Name",username);
    window.location="kwitter_room.html";
}