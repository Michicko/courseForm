class UI{

    displayCourse(course) {
        const container = document.querySelector('.course-container');
        let html = `
        <div class="card">
            <img src="${course.image}" alt="image">
            <div class="card-body">
                <p class="name"><span class="name-tag"><b>Name:</b></span> ${course.customer}</p>
                <p class="course"><span class="course-tag"><b>Course:</b></span> ${course.courseTitle}</p>
                <p class="author"><span class="author-tag"><b>Author:</b></span> ${course.author}</p>
            </div>
        </div>
        `;
        container.innerHTML += html;
    }

    // clear fields
    clearFields() {
        document.querySelector('#customer-name-input').value = '';
        document.querySelector('#course-title-input').value = '';
        document.querySelector('#author-input').value = '';
        document.querySelector('#img-url-input').value = '';
    }

    // set alert
    setAlert(msg, className) {
        const p = document.createElement('p');
        p.className = className;
        p.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container');
        const head = document.querySelector('.head');
        container.insertBefore(p, head.nextElementSibling);
    }

    // remove alert if it exist
    removeAlert(className) {
        const head = document.querySelector('.head');
        if (head.nextElementSibling.classList.contains(className)) {
            head.nextElementSibling.remove();
        }
    }
}