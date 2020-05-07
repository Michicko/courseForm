class Course{
    constructor(customer, courseTitle, author, image) {
        this.customer = customer;
        this.courseTitle = courseTitle;
        this.author = author;
        this.image = image;
    }
}

// Variables
const customerNameInput = document.querySelector('#customer-name-input');
const courseInput = document.querySelector('#course-title-input');
const authorNameInput = document.querySelector('#author-input');
const imageUrlInput = document.querySelector('#img-url-input');
const form = document.querySelector('form');

// Event Listeners
// DOMCONTENT
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const store = new Store();
    const courses = store.getCourses();

    courses.forEach((course) => {
        ui.displayCourse(course);
    });
});

form.addEventListener('submit', addCourse);

// add course to DOM
function addCourse(e) {
    const loading = document.querySelector('#loading');
    const courseContainer = document.querySelector('.course-container');
    const subTitle = document.querySelector('.sub');
    const customer = customerNameInput.value;
    const courseTitle = courseInput.value;
    const author = authorNameInput.value;
    const image = imageUrlInput.value;
    const course = new Course(customer, courseTitle, author, image);
    const ui = new UI();
    const store = new Store();
    // validate
    if (customer === '' || courseTitle === '' || author === '') {
        ui.setAlert('Please fill in all fields', 'error');
        // remove alert
        setTimeout(() => {
            ui.removeAlert('error');
        }, 2000);
    } else {
        ui.setAlert('Loading...', 'message');
        subTitle.style.display = 'none';
        loading.style.display = 'block';
        courseContainer.style.display = 'none';
        setTimeout(() => {
            subTitle.style.display = 'block';
            loading.style.display = 'none';
            courseContainer.style.display = 'grid';
            ui.removeAlert('message');
        }, 1500);
        // display course
        ui.displayCourse(course);
        // save to Ls
        store.saveCourse(course);
        // clear fields
        ui.clearFields();
    }
    e.preventDefault();
}