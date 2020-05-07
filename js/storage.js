class Store{

    // get courses
    getCourses() {
        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }

    // save course 
    saveCourse(course) {
        const courses = this.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }
}