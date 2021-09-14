const links = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    },
]

window.onload = function(){
    let ul=document.createElement('ul');
    for(i=0;i<links.length;i++)
    {
        var li=document.createElement('li');
        li.innerHTML="<a onclick='redirectTo(i)'>" + links[i].label + "</a>";
        ul.appendChild(li);
    }
    document.getElementById('assignment_list').appendChild(ul);
};

redirectTo = function (param) {
    window.location.href="week"+param+"/index.html";
}