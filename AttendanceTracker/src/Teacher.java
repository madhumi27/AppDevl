//
//
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.ArrayList;
//import java.util.List;
//public class Teacher extends Person {
//    private double salary;
//    private String qualification;
//    private String specialization;
//    public Teacher() {
//    	
//    }
//    public Teacher(int id, String name, double salary, String phoneNumber, String email, String qualification, String specialization) {
//        super(id, name, phoneNumber, email);
//        this.salary = salary;
//        this.qualification = qualification;
//        this.specialization = specialization;
//    }
//
//    // Getters and Setters
//
//    public double getSalary() {
//        return salary;
//    }
//
//    public void setSalary(double salary) {
//        this.salary = salary;
//    }
//
//    public String getQualification() {
//        return qualification;
//    }
//
//    public void setQualification(String qualification) {
//        this.qualification = qualification;
//    }
//
//    public String getSpecialization() {
//        return specialization;
//    }
//
//    public void setSpecialization(String specialization) {
//        this.specialization = specialization;
//    }
//
//    // Implementing the abstract method from Person class
//    @Override
//    public void displayInfo() {
//        System.out.println("Teacher ID: " + getId());
//        System.out.println("Teacher Name: " + getName());
//        System.out.println("Phone Number: " + getPhoneNumber());
//        System.out.println("Email: " + getEmail());
//        System.out.println("Salary: " + getSalary());
//        System.out.println("Qualification: " + getQualification());
//        System.out.println("Specialization: " + getSpecialization());
//    }
//
//    // CRUD operations
//
//    public void save(Connection connection) throws SQLException {
//        String sql = "INSERT INTO teacher (id, name, salary, email, phone, qualification, specialization) VALUES (?, ?, ?, ?, ?, ?, ?)";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, getId());
//            statement.setString(2, getName());
//            statement.setDouble(3, salary);
//            statement.setString(4, getEmail());
//            statement.setString(5, getPhoneNumber());
//            statement.setString(6, qualification);
//            statement.setString(7, specialization);
//            statement.executeUpdate();
//        }
//    }
//
//    public static Teacher getById(Connection connection, int id) throws SQLException {
//        String sql = "SELECT * FROM teacher WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, id);
//            try (ResultSet resultSet = statement.executeQuery()) {
//                if (resultSet.next()) {
//                    return new Teacher(
//                            resultSet.getInt("id"),
//                            resultSet.getString("name"),
//                            resultSet.getDouble("salary"),
//                            resultSet.getString("email"),
//                            resultSet.getString("phone"),
//                            resultSet.getString("qualification"),
//                            resultSet.getString("specialization")
//                    );
//                }
//            }
//        }
//        return null;
//    }
//
//    public void update(Connection connection) throws SQLException {
//        String sql = "UPDATE teacher SET name = ?, salary = ?, email = ?, phone= ?, qualification = ?, specialization = ? WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setString(1, getName());
//            statement.setDouble(2, salary);
//            statement.setString(3, getEmail());
//            statement.setString(4, getPhoneNumber());
//            statement.setString(5, qualification);
//            statement.setString(6, specialization);
//            statement.setInt(7, getId());
//            statement.executeUpdate();
//        }
//    }
//
//    public void delete(Connection connection) throws SQLException {
//        String sql = "DELETE FROM teacher WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, getId());
//            statement.executeUpdate();
//        }
//    }
//
//    public static List<Teacher> getAll(Connection connection) throws SQLException {
//        List<Teacher> teachers = new ArrayList<>();
//        String sql = "SELECT * FROM teacher";
//        try (PreparedStatement statement = connection.prepareStatement(sql);
//             ResultSet resultSet = statement.executeQuery()) {
//            while (resultSet.next()) {
//                teachers.add(new Teacher(
//                        resultSet.getInt("id"),
//                        resultSet.getString("name"),
//                        resultSet.getDouble("salary"),
//                        resultSet.getString("email"),
//                        resultSet.getString("phone"),
//                        resultSet.getString("qualification"),
//                        resultSet.getString("specialization")
//                ));
//            }
//        }
//        return teachers;
//    }
//}

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Teacher extends Person {
    private double salary;
    private String qualification;
    private String specialization;

    @Override
    public void readInput(Scanner scanner) {
        System.out.print("Enter teacher name: ");
        name = scanner.nextLine();
        System.out.print("Enter phone number: ");
        phoneNumber = scanner.nextLine();
        System.out.print("Enter email: ");
        email = scanner.nextLine();
        System.out.print("Enter salary: ");
        salary = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character
        System.out.print("Enter qualification: ");
        qualification = scanner.nextLine();
        System.out.print("Enter specialization: ");
        specialization = scanner.nextLine();
    }

    @Override
    public void save(Connection connection) throws SQLException {
        String sql = "INSERT INTO teacher (name, phone, email, salary, qualification, specialization) VALUES (?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, name);
            statement.setString(2, phoneNumber);
            statement.setString(3, email);
            statement.setDouble(4, salary);
            statement.setString(5, qualification);
            statement.setString(6, specialization);
            statement.executeUpdate();

            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    id = generatedKeys.getInt(1);
                }
            }
        }
    }
    public static Teacher retrieve(Connection connection, int teacherId) throws SQLException {
        String sql = "SELECT * FROM teacher WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, teacherId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    Teacher teacher = new Teacher();
                    teacher.setId(resultSet.getInt("id"));
                    teacher.setName(resultSet.getString("name"));
                    teacher.setPhoneNumber(resultSet.getString("phone"));
                    teacher.setEmail(resultSet.getString("email"));
                    teacher.setSalary(resultSet.getDouble("salary"));
                    teacher.setQualification(resultSet.getString("qualification"));
                    teacher.setSpecialization(resultSet.getString("specialization"));
                    return teacher;
                }
            }
        }
        return null; // Teacher with the given ID not found
    }
   
    public void update(Connection connection) throws SQLException {
        String sql = "UPDATE teacher SET name = ?, phone = ?, email = ?, salary = ?, qualification = ?, specialization = ? WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, name);
            statement.setString(2, phoneNumber);
            statement.setString(3, email);
            statement.setDouble(4, salary);
            statement.setString(5, qualification);
            statement.setString(6, specialization);
            statement.setInt(7, id);
            statement.executeUpdate();
        }
    }
   
    public void delete(Connection connection) throws SQLException {
        String sql = "DELETE FROM teacher WHERE id = ? ";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, id);
            statement.executeUpdate();
        }
    }

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
}