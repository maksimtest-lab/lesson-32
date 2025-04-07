const getUser = (id) => {
    return fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(console.log);

}

const checkUserStatus = () => {
    const user = getUser(1);
    const statusContainer = document.getElementById('status');

    user.status = Math.random() > 0.5 ? 'inactive' : 'active' ;

    if (user.status === 'active') {
       statusContainer.textContent = 'User is active';
    } else {
       statusContainer.textContent = 'User is not active';
    }
}

checkUserStatus();

setInterval(checkUserStatus, 5000);

