//
//import java.sql.Connection;
//import java.sql.SQLException;
//import java.util.List;
//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        try {
//            Connection connection = DBConnection.getConnection();
//            Scanner scanner = new Scanner(System.in);
//
//            while (true) {
//                // Display the menu and handle user choices
//                System.out.println("Choose an option:");
//                System.out.println("1. Create Student");
//                System.out.println("2. Update Student");
//                System.out.println("3. Delete Student");
//                System.out.println("4. Create Teacher");
//                System.out.println("5. Update Teacher");
//                System.out.println("6. Delete Teacher");
//                System.out.println("7. Mark Attendance");
//                System.out.println("8. Update Attendance");
//                System.out.println("9. Delete Attendance");
//                System.out.println("10. View Students");
//                System.out.println("11. View Teachers");
//                System.out.println("12. View Student Attendance");
//                System.out.println("13. View Student Details"); // New option
//                System.out.println("14. View Teacher Details");
//                System.out.println("0. Exit");
//                System.out.print("Enter your choice: ");
//                int choice = scanner.nextInt();
//                scanner.nextLine();
//
//                if (choice == 0) {
//                    break;
//                } else if (choice == 1) {
//                    // Create Student
//                    System.out.print("Enter student name: ");
//                    String name = scanner.nextLine();
//
//                    System.out.print("Enter student class: ");
//                    String className = scanner.nextLine();
//
//                    System.out.print("Enter student phone number: ");
//                    String phoneNumber = scanner.nextLine();
//
//                    System.out.print("Enter student email: ");
//                    String email = scanner.nextLine();
//
//                    System.out.print("Enter student percentage: ");
//                    double percentage = scanner.nextDouble();
//                    scanner.nextLine();
//
//                    // Create a new Student object with the entered information
//                    Student newStudent = new Student();
//                    newStudent.setName(name);
//                    newStudent.setClassName(className);
//                    newStudent.setPhoneNumber(phoneNumber);
//                    newStudent.setEmail(email);
//                    newStudent.setPercentage(percentage);
//
//                    try {
//                        // Call the save method to insert the new student into the database
//                        newStudent.save(connection);
//                        System.out.println("New student created successfully!");
//                    } catch (SQLException e) {
//                        System.err.println("Error creating student: " + e.getMessage());
//                    }
//                } else if (choice == 2) {
//                    // Update Student
//                    System.out.print("Enter the student ID to update: ");
//                    int studentIdToUpdate = scanner.nextInt();
//                    scanner.nextLine();
//
//                    try {
//                        Student studentToUpdate = Student.getById(connection, studentIdToUpdate);
//
//                        if (studentToUpdate != null) {
//                            System.out.print("Enter new student name: ");
//                            String newName = scanner.nextLine();
//
//                            System.out.print("Enter new student class: ");
//                            String newClassName = scanner.nextLine();
//
//                            System.out.print("Enter new student phone number: ");
//                            String newPhoneNumber = scanner.nextLine();
//
//                            System.out.print("Enter new student email: ");
//                            String newEmail = scanner.nextLine();
//
//                            System.out.print("Enter new student percentage: ");
//                            double newPercentage = scanner.nextDouble();
//                            scanner.nextLine();
//
//                            studentToUpdate.setName(newName);
//                            studentToUpdate.setClassName(newClassName);
//                            studentToUpdate.setPhoneNumber(newPhoneNumber);
//                            studentToUpdate.setEmail(newEmail);
//                            studentToUpdate.setPercentage(newPercentage);
//
//                            studentToUpdate.update(connection);
//                            System.out.println("Student information updated successfully!");
//                        } else {
//                            System.out.println("Student not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error updating student: " + e.getMessage());
//                    }
//                } else if (choice == 3) {
//                    // Delete Student
//                    System.out.print("Enter the student ID to delete: ");
//                    int studentIdToDelete = scanner.nextInt();
//                    scanner.nextLine();
//
//                    try {
//                        Student studentToDelete = Student.getById(connection, studentIdToDelete);
//                        if (studentToDelete != null) {
//                            studentToDelete.delete(connection);
//                            System.out.println("Student deleted successfully!");
//                        } else {
//                            System.out.println("Student not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error deleting student: " + e.getMessage());
//                    }
//                } else if (choice == 4) {
//                    // Create Teacher
//                    System.out.print("Enter teacher name: ");
//                    String name = scanner.nextLine();
//
//                    System.out.print("Enter teacher salary: ");
//                    double salary = scanner.nextDouble();
//                    scanner.nextLine();
//
//                    System.out.print("Enter teacher email: ");
//                    String email = scanner.nextLine();
//
//                    System.out.print("Enter teacher phone number: ");
//                    String phoneNumber = scanner.nextLine();
//
//                    System.out.print("Enter teacher qualification: ");
//                    String qualification = scanner.nextLine();
//
//                    System.out.print("Enter teacher specialization: ");
//                    String specialization = scanner.nextLine();
//
//                    // Create a new Teacher object with the entered information
//                    Teacher newTeacher = new Teacher();
//                    newTeacher.setName(name);
//                    newTeacher.setSalary(salary);
//                    newTeacher.setEmail(email);
//                    newTeacher.setPhoneNumber(phoneNumber);
//                    newTeacher.setQualification(qualification);
//                    newTeacher.setSpecialization(specialization);
//
//                    try {
//                        // Call the save method to insert the new teacher into the database
//                        newTeacher.save(connection);
//                        System.out.println("New teacher created successfully!");
//                    } catch (SQLException e) {
//                        System.err.println("Error creating teacher: " + e.getMessage());
//                    }
//                } else if (choice == 5) {
//                    // Update Teacher
//                    System.out.print("Enter the teacher ID to update: ");
//                    int teacherIdToUpdate = scanner.nextInt();
//                    scanner.nextLine();
//
//                    try {
//                        Teacher teacherToUpdate = Teacher.getById(connection, teacherIdToUpdate);
//
//                        if (teacherToUpdate != null) {
//                            System.out.print("Enter new teacher name: ");
//                            String newName = scanner.nextLine();
//
//                            System.out.print("Enter new teacher salary: ");
//                            double newSalary = scanner.nextDouble();
//                            scanner.nextLine();
//
//                            System.out.print("Enter new teacher email: ");
//                            String newEmail = scanner.nextLine();
//
//                            System.out.print("Enter new teacher phone number: ");
//                            String newPhoneNumber = scanner.nextLine();
//
//                            System.out.print("Enter new teacher qualification: ");
//                            String newQualification = scanner.nextLine();
//
//                            System.out.print("Enter new teacher specialization: ");
//                            String newSpecialization = scanner.nextLine();
//
//                            teacherToUpdate.setName(newName);
//                            teacherToUpdate.setSalary(newSalary);
//                            teacherToUpdate.setEmail(newEmail);
//                            teacherToUpdate.setPhoneNumber(newPhoneNumber);
//                            teacherToUpdate.setQualification(newQualification);
//                            teacherToUpdate.setSpecialization(newSpecialization);
//
//                            teacherToUpdate.update(connection);
//                            System.out.println("Teacher information updated successfully!");
//                        } else {
//                            System.out.println("Teacher not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error updating teacher: " + e.getMessage());
//                    }
//                } else if (choice == 6) {
//                    // Delete Teacher
//                    System.out.print("Enter the teacher ID to delete: ");
//                    int teacherIdToDelete = scanner.nextInt();
//                    scanner.nextLine();
//
//                    try {
//                        Teacher teacherToDelete = Teacher.getById(connection, teacherIdToDelete);
//                        if (teacherToDelete != null) {
//                            teacherToDelete.delete(connection);
//                            System.out.println("Teacher deleted successfully!");
//                        } else {
//                            System.out.println("Teacher not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error deleting teacher: " + e.getMessage());
//                    }
//                } else if (choice == 7) {
//                    // Mark Attendance
//                    System.out.print("Enter student ID: ");
//                    int studentId = scanner.nextInt();
//                    scanner.nextLine();
//
//                    System.out.print("Enter teacher ID: ");
//                    int teacherId = scanner.nextInt();
//                    scanner.nextLine();
//
//                    System.out.print("Enter attendance date (yyyy-mm-dd): ");
//                    String dateString = scanner.nextLine();
//                    java.sql.Date date = java.sql.Date.valueOf(dateString);
//
//                    System.out.print("Enter attendance status (Present/Absent): ");
//                    String status = scanner.nextLine();
//
//                    // Create a new Attendance object with the entered information
//                    Attendance newAttendance = new Attendance();
//                    newAttendance.setStudentId(studentId);
//                    newAttendance.setTeacherId(teacherId);
//                    newAttendance.setDate(date);
//                    newAttendance.setStatus(status);
//
//                    try {
//                        // Call the save method to insert the new attendance record into the database
//                        newAttendance.save(connection);
//                        System.out.println("Attendance marked successfully!");
//                    } catch (SQLException e) {
//                        System.err.println("Error marking attendance: " + e.getMessage());
//                    }
//                } else if (choice == 8) {
//                    // Update Attendance
//                    System.out.print("Enter the attendance ID to update: ");
//                    int attendanceIdToUpdate = scanner.nextInt();
//                    scanner.nextLine();
//
//                    try {
//                        Attendance attendanceToUpdate = Attendance.getById(connection, attendanceIdToUpdate);
//
//                        if (attendanceToUpdate != null) {
//                            System.out.print("Enter new student ID: ");
//                            int newStudentId = scanner.nextInt();
//                            scanner.nextLine();
//
//                            System.out.print("Enter new teacher ID: ");
//                            int newTeacherId = scanner.nextInt();
//                            scanner.nextLine();
//
//                            System.out.print("Enter new attendance date (yyyy-mm-dd): ");
//                            String newDateString = scanner.nextLine();
//                            java.sql.Date newDate = java.sql.Date.valueOf(newDateString);
//
//                            System.out.print("Enter new attendance status (Present/Absent): ");
//                            String newStatus = scanner.nextLine();
//
//                            attendanceToUpdate.setStudentId(newStudentId);
//                            attendanceToUpdate.setTeacherId(newTeacherId);
//                            attendanceToUpdate.setDate(newDate);
//                            attendanceToUpdate.setStatus(newStatus);
//
//                            attendanceToUpdate.update(connection);
//                            System.out.println("Attendance updated successfully!");
//                        } else {
//                            System.out.println("Attendance not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error updating attendance: " + e.getMessage());
//                    }
//                } else if (choice == 9) {
//                    // Delete Attendance
//                    System.out.print("Enter the attendance ID to delete: ");
//                    int attendanceIdToDelete = scanner.nextInt();
//                    scanner.nextLine();
//
//                    try {
//                        Attendance attendanceToDelete = Attendance.getById(connection, attendanceIdToDelete);
//                        if (attendanceToDelete != null) {
//                            attendanceToDelete.delete(connection);
//                            System.out.println("Attendance deleted successfully!");
//                        } else {
//                            System.out.println("Attendance not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error deleting attendance: " + e.getMessage());
//                    }
//                } else if (choice == 10) {
//                    // View Students
//                    try {
//                        List<Student> students = Student.getAll(connection);
//                        if (!students.isEmpty()) {
//                            System.out.println("Students:");
//                            for (Student student : students) {
//                                System.out.println(student.getId() + ". " + student.getName());
//                            }
//                        } else {
//                            System.out.println("No students found.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error viewing students: " + e.getMessage());
//                    }
//                } 
//
//             else if (choice == 11) {
//                // View Teachers
//                try {
//                    List<Teacher> teachers = Teacher.getAll(connection);
//                    if (!teachers.isEmpty()) {
//                        System.out.println("Teachers:");
//                        for (Teacher teacher : teachers) {
//                            System.out.println(teacher.getId() + ". " + teacher.getName());
//                        }
//                    } else {
//                        System.out.println("No teachers found.");
//                    }
//                } catch (SQLException e) {
//                    System.err.println("Error viewing teachers: " + e.getMessage());
//                }
//            } else if (choice == 12) {
//                // View Student Attendance
//                System.out.print("Enter student ID to view attendance: ");
//                int studentId = scanner.nextInt();
//                scanner.nextLine();
//
//                try {
//                    List<Attendance> attendances = Attendance.getByStudentId(connection, studentId);
//                    if (!attendances.isEmpty()) {
//                        System.out.println("Attendance for Student ID " + studentId + ":");
//                        for (Attendance attendance : attendances) {
//                            System.out.println("Date: " + attendance.getDate() + ", Status: " + attendance.getStatus());
//                        }
//                    } else {
//                        System.out.println("No attendance records found for Student ID " + studentId);
//                    }
//                } catch (SQLException e) {
//                    System.err.println("Error viewing student attendance: " + e.getMessage());
//                }
//            } else if (choice == 13) {
//                // View Student Details
//                System.out.print("Enter student ID to view details (or enter 0 to view all students): ");
//                int studentId = scanner.nextInt();
//                scanner.nextLine();
//
//                if (studentId == 0) {
//                    try {
//                        List<Student> students = Student.getAll(connection);
//                        if (!students.isEmpty()) {
//                            System.out.println("All Students:");
//                            for (Student student : students) {
//                                System.out.println("ID: " + student.getId());
//                                System.out.println("Name: " + student.getName());
//                                System.out.println("Class: " + student.getClassName());
//                                System.out.println("Phone Number: " + student.getPhoneNumber());
//                                System.out.println("Email: " + student.getEmail());
//                                System.out.println("Percentage: " + student.getPercentage());
//                                System.out.println();
//                            }
//                        } else {
//                            System.out.println("No students found.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error viewing students: " + e.getMessage());
//                    }
//                } else {
//                    try {
//                        Student student = Student.getById(connection, studentId);
//                        if (student != null) {
//                            System.out.println("Student Details:");
//                            System.out.println("ID: " + student.getId());
//                            System.out.println("Name: " + student.getName());
//                            System.out.println("Class: " + student.getClassName());
//                            System.out.println("Phone Number: " + student.getPhoneNumber());
//                            System.out.println("Email: " + student.getEmail());
//                            System.out.println("Percentage: " + student.getPercentage());
//                        } else {
//                            System.out.println("Student not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error viewing student details: " + e.getMessage());
//                    }
//                }
//            } else if (choice == 14) {
//                // View Teacher Details
//                System.out.print("Enter teacher ID to view details (or enter 0 to view all teachers): ");
//                int teacherId = scanner.nextInt();
//                scanner.nextLine();
//
//                if (teacherId == 0) {
//                    try {
//                        List<Teacher> teachers = Teacher.getAll(connection);
//                        if (!teachers.isEmpty()) {
//                            System.out.println("All Teachers:");
//                            for (Teacher teacher : teachers) {
//                                System.out.println("ID: " + teacher.getId());
//                                System.out.println("Name: " + teacher.getName());
//                                System.out.println("Salary: " + teacher.getSalary());
//                                System.out.println("Email: " + teacher.getEmail());
//                                System.out.println("Phone Number: " + teacher.getPhoneNumber());
//                                System.out.println("Qualification: " + teacher.getQualification());
//                                System.out.println("Specialization: " + teacher.getSpecialization());
//                                System.out.println();
//                            }
//                        } else {
//                            System.out.println("No teachers found.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error viewing teachers: " + e.getMessage());
//                    }
//                } else {
//                    try {
//                        Teacher teacher = Teacher.getById(connection, teacherId);
//                        if (teacher != null) {
//                            System.out.println("Teacher Details:");
//                            System.out.println("ID: " + teacher.getId());
//                            System.out.println("Name: " + teacher.getName());
//                            System.out.println("Salary: " + teacher.getSalary());
//                            System.out.println("Email: " + teacher.getEmail());
//                            System.out.println("Phone Number: " + teacher.getPhoneNumber());
//                            System.out.println("Qualification: " + teacher.getQualification());
//                            System.out.println("Specialization: " + teacher.getSpecialization());
//                        } else {
//                            System.out.println("Teacher not found with the given ID.");
//                        }
//                    } catch (SQLException e) {
//                        System.err.println("Error viewing teacher details: " + e.getMessage());
//                    }
//                }
//            }
//        }
//
//        scanner.close();
//        connection.close();
//    } catch (SQLException e) {
//        System.err.println("Error connecting to the database: " + e.getMessage());
//    }
//}
//}


import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Connection connection = DBConnection.getConnection()) {
            Scanner scanner = new Scanner(System.in);

            while (true) {
                System.out.println("\nSelect an option:");
                System.out.println("1. Add Student");
                System.out.println("2. Retrieve Student");
                System.out.println("3. Update Student");
                System.out.println("4. Delete Student");
                System.out.println("5. Add Teacher");
                System.out.println("6. Retrieve Teacher");
                System.out.println("7. Update Teacher");
                System.out.println("8. Delete Teacher");
                System.out.println("9. Add Attendance");
                System.out.println("10. Retrieve Attendance");
                System.out.println("11. Update Attendance");
                System.out.println("12. Delete Attendance");
                System.out.println("13. Display Attendance Percentage");
                System.out.println("0. Exit");

                int option = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                switch (option) {
                    case 1:
                        addPerson(scanner, connection, new Student());
                        break;
                    case 2:
                        retrieveStudent(scanner, connection);
                        break;
                    case 3:
                        updateStudent(scanner, connection);
                        break;
                    case 4:
                        deleteStudent(scanner, connection);
                        break;
                    case 5:
                        addPerson(scanner, connection, new Teacher());
                        break;
                    case 6:
                        retrieveTeacher(scanner, connection);
                        break;
                    case 7:
                        updateTeacher(scanner, connection);
                        break;
                    case 8:
                        deleteTeacher(scanner, connection);
                        break;
                    case 9:
                        addPerson(scanner, connection, new Attendance());
                        break;
                    case 10:
                        retrieveAttendance(scanner, connection);
                        break;
                    case 11:
                        updateAttendance(scanner, connection);
                        break;
                    case 12:
                        deleteAttendance(scanner, connection);
                        break;
                    case 13:
                        Attendance.displayAttendancePercentage(connection);
                        break;
                    case 0:
                        System.out.println("Exiting...");
                        return;
                    default:
                        System.out.println("Invalid option. Try again.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void addPerson(Scanner scanner, Connection connection, Person person) throws SQLException {
        person.readInput(scanner);
        person.save(connection);
        System.out.println(person.getClass().getSimpleName() + " added successfully!");
    }

    private static void retrieveStudent(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter student ID to retrieve: ");
        int studentId = scanner.nextInt();
        Student student = Student.retrieve(connection, studentId);
        if (student != null) {
            System.out.println("Retrieved student data:");
            System.out.println("ID: " + student.getId());
            System.out.println("Name: " + student.getName());
            System.out.println("Class: " + student.getClassName());
            System.out.println("Phone Number: " + student.getPhoneNumber());
            System.out.println("Email: " + student.getEmail());
            System.out.println("Percentage: " + student.getPercentage());
        } else {
            System.out.println("Student with ID " + studentId + " not found.");
        }
    }

    private static void updateStudent(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter student ID to update: ");
        int studentId = scanner.nextInt();
        Student student = Student.retrieve(connection, studentId);
        if (student != null) {
            System.out.println("Current student data:");
            System.out.println("ID: " + student.getId());
            System.out.println("Name: " + student.getName());
            System.out.println("Class: " + student.getClassName());
            System.out.println("Phone Number: " + student.getPhoneNumber());
            System.out.println("Email: " + student.getEmail());
            System.out.println("Percentage: " + student.getPercentage());

            System.out.println("\nEnter updated student data:");
            scanner.nextLine(); // Consume the newline character
            System.out.print("Name: ");
            student.setName(scanner.nextLine());
            System.out.print("Class: ");
            student.setClassName(scanner.nextLine());
            System.out.print("Phone Number: ");
            student.setPhoneNumber(scanner.nextLine());
            System.out.print("Email: ");
            student.setEmail(scanner.nextLine());
            System.out.print("Percentage: ");
            student.setPercentage(scanner.nextDouble());

            student.update(connection);
            System.out.println("Student data updated successfully!");
        } else {
            System.out.println("Student with ID " + studentId + " not found.");
        }
    }

    private static void deleteStudent(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter student ID to delete: ");
        int studentId = scanner.nextInt();
        Student student = Student.retrieve(connection, studentId);
        if (student != null) {
            student.delete(connection);
            System.out.println("Student data deleted successfully!");
        } else {
            System.out.println("Student with ID " + studentId + " not found.");
        }
    }

    private static void retrieveTeacher(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter teacher ID to retrieve: ");
        int teacherId = scanner.nextInt();
        Teacher teacher = Teacher.retrieve(connection, teacherId);
        if (teacher != null) {
            System.out.println("Retrieved teacher data:");
            System.out.println("ID: " + teacher.getId());
            System.out.println("Name: " + teacher.getName());
            System.out.println("Phone Number: " + teacher.getPhoneNumber());
            System.out.println("Email: " + teacher.getEmail());
            System.out.println("Salary: " + teacher.getSalary());
            System.out.println("Qualification: " + teacher.getQualification());
            System.out.println("Specialization: " + teacher.getSpecialization());
        } else {
            System.out.println("Teacher with ID " + teacherId + " not found.");
        }
    }

    private static void updateTeacher(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter teacher ID to update: ");
        int teacherId = scanner.nextInt();
        Teacher teacher = Teacher.retrieve(connection, teacherId);
        if (teacher != null) {
            System.out.println("Current teacher data:");
            System.out.println("ID: " + teacher.getId());
            System.out.println("Name: " + teacher.getName());
            System.out.println("Phone Number: " + teacher.getPhoneNumber());
            System.out.println("Email: " + teacher.getEmail());
            System.out.println("Salary: " + teacher.getSalary());
            System.out.println("Qualification: " + teacher.getQualification());
            System.out.println("Specialization: " + teacher.getSpecialization());

            System.out.println("\nEnter updated teacher data:");
            scanner.nextLine(); // Consume the newline character
            System.out.print("Name: ");
            teacher.setName(scanner.nextLine());
            System.out.print("Phone Number: ");
            teacher.setPhoneNumber(scanner.nextLine());
            System.out.print("Email: ");
            teacher.setEmail(scanner.nextLine());
            System.out.print("Salary: ");
            teacher.setSalary(scanner.nextDouble());
            scanner.nextLine(); // Consume the newline character
            System.out.print("Qualification: ");
            teacher.setQualification(scanner.nextLine());
            System.out.print("Specialization: ");
            teacher.setSpecialization(scanner.nextLine());

            teacher.update(connection);
            System.out.println("Teacher data updated successfully!");
        } else {
            System.out.println("Teacher with ID " + teacherId + " not found.");
        }
    }

    private static void deleteTeacher(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter teacher ID to delete: ");
        int teacherId = scanner.nextInt();
        Teacher teacher = Teacher.retrieve(connection, teacherId);
        if (teacher != null) {
            teacher.delete(connection);
            System.out.println("Teacher data deleted successfully!");
        } else {
            System.out.println("Teacher with ID " + teacherId + " not found.");
        }
    }

    private static void retrieveAttendance(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter attendance ID to retrieve: ");
        int attendanceId = scanner.nextInt();
        Attendance attendance = Attendance.retrieve(connection, attendanceId);
        if (attendance != null) {
            System.out.println("Retrieved attendance data:");
            System.out.println("ID: " + attendance.getId());
            System.out.println("Student ID: " + attendance.getStudentId());
            System.out.println("Teacher ID: " + attendance.getTeacherId());
            System.out.println("Date: " + attendance.getDate());
            System.out.println("Status: " + attendance.getStatus());
        } else {
            System.out.println("Attendance with ID " + attendanceId + " not found.");
        }
    }

    private static void updateAttendance(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter attendance ID to update: ");
        int attendanceId = scanner.nextInt();
        Attendance attendance = Attendance.retrieve(connection, attendanceId);
        if (attendance != null) {
            System.out.println("Current attendance data:");
            System.out.println("ID: " + attendance.getId());
            System.out.println("Student ID: " + attendance.getStudentId());
            System.out.println("Teacher ID: " + attendance.getTeacherId());
            System.out.println("Date: " + attendance.getDate());
            System.out.println("Status: " + attendance.getStatus());

            System.out.println("\nEnter updated attendance data:");
            scanner.nextLine(); // Consume the newline character
            System.out.print("Student ID: ");
            attendance.setStudentId(scanner.nextInt());
            System.out.print("Teacher ID: ");
            attendance.setTeacherId(scanner.nextInt());
            scanner.nextLine(); // Consume the newline character
            System.out.print("Status (Present/Absent): ");
            attendance.setStatus(scanner.nextLine());

            attendance.update(connection);
            System.out.println("Attendance data updated successfully!");
        } else {
            System.out.println("Attendance with ID " + attendanceId + " not found.");
        }
    }

    private static void deleteAttendance(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter attendance ID to delete: ");
        int attendanceId = scanner.nextInt();
        Attendance attendance = Attendance.retrieve(connection, attendanceId);
        if (attendance != null) {
            attendance.delete(connection);
            System.out.println("Attendance data deleted successfully!");
        } else {
            System.out.println("Attendance with ID " + attendanceId + " not found.");
        }
    }
}