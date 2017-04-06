(function setupDoctor(root) {
    class Doctor extends root.Person {
        fullname() {
            return "Dr. " + super.fullname();
        }
    }
    root.Doctor = Doctor;
}(this));

