function getUser(id) {
    console.log(`${id} id's User will be brought..`);
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve({ name: 'halil', id: id });
        }, 2000);
    });
}

function getCourses(userName) {
    console.log(`${userName} id's user's courses will be brought..`);
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            reject("error");
            resolve(['java', 'js', 'flutter']);
        }, 2000);
    });
}

function getComments(courseName) {
    console.log(`${courseName} bringing comments of the course named..`);
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Course is amazing!");
        }, 2000);
    });
}

async function showComments() {
    try {
        const userObject = await getUser(45236);
        const courseArray = await getCourses(userObject.name);
        const comment = await getComments(courseArray[0]);
        console.log(comment);
    } catch (err) {
        console.log("error"+err);
   }
}


showComments();