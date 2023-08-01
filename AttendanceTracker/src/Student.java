////import java.sql.Connection;
//
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.ArrayList;
//import java.util.List;
//public class Student extends Person {
//    private String className;
//    private double percentage;
//    
//    public Student() {
//    	
//    }
//    public Student(int id, String name, String phoneNumber, String email, String className, double percentage) {
//        super(id, name, phoneNumber, email);
//        this.className = className;
//        this.percentage = percentage;
//    }
//
//    // Getters and Setters
//
//    public String getClassName() {
//        return className;
//    }
//
//    public void setClassName(String className) {
//        this.className = className;
//    }
//
//    public double getPercentage() {
//        return percentage;
//    }
//
//    public void setPercentage(double percentage) {
//        this.percentage = percentage;
//    }
//
//    // Implementing the abstract method from Person class
//    @Override
//    public void displayInfo() {
//        System.out.println("Student ID: " + getId());
//        System.out.println("Student Name: " + getName());
//        System.out.println("Phone Number: " + getPhoneNumber());
//        System.out.println("Email: " + getEmail());
//        System.out.println("Class Name: " + getClassName());
//        System.out.println("Percentage: " + getPercentage());
//    }
//
//    // CRUD operations
//
//    public void save(Connection connection) throws SQLException {
//        String sql = "INSERT INTO student (id, name, class, phonenumber, email, percentage) VALUES (?, ?, ?, ?, ?, ?)";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, getId());
//            statement.setString(2, getName());
//            statement.setString(3, className);
//            statement.setString(4, getPhoneNumber());
//            statement.setString(5, getEmail());
//            statement.setDouble(6, percentage);
//            statement.executeUpdate();
//        }
//    }
//
//    public static Student getById(Connection connection, int id) throws SQLException {
//        String sql = "SELECT * FROM student WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, id);
//            try (ResultSet resultSet = statement.executeQuery()) {
//                if (resultSet.next()) {
//                    return new Student(
//                            resultSet.getInt("id"),
//                            resultSet.getString("name"),
//                            resultSet.getString("class"),
//                            resultSet.getString("phonenumber"),
//                            resultSet.getString("email"),
//                            resultSet.getDouble("percentage")
//                    );
//                }
//            }
//        }
//        return null;
//    }
//    
//    public void update(Connection connection) throws SQLException {
//        String sql = "UPDATE student SET name = ?, class = ?, phonenumber = ?, email = ?, percentage = ? WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setString(1, getName());
//            statement.setString(2, className);
//            statement.setString(3, getPhoneNumber());
//            statement.setString(4, getEmail());
//            statement.setDouble(5, percentage);
//            statement.setInt(6, getId());
//            statement.executeUpdate();
//        }
//    }
//
//    public void delete(Connection connection) throws SQLException {
//        String sql = "DELETE FROM student WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, getId());
//            statement.executeUpdate();
//        }
//    }
//
//    public static List<Student> getAll(Connection connection) throws SQLException {
//        List<Student> students = new ArrayList<>();
//        String sql = "SELECT * FROM student";
//        try (PreparedStatement statement = connection.prepareStatement(sql);
//             ResultSet resultSet = statement.executeQuery()) {
//            while (resultSet.next()) {
//                students.add(new Student(
//                        resultSet.getInt("id"),
//                        resultSet.getString("name"),
//                        resultSet.getString("class"),
//                        resultSet.getString("phonenumber"),
//                        resultSet.getString("email"),
//                        resultSet.getDouble("percentage")
//                ));
//            }
//        }
//        return students;
//    }
//}
//
//
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

public class Student extends Person {
    private String className;
    private double percentage;

    @Override
    public void readInput(Scanner scanner) {
        System.out.print("Enter student name: ");
        name = scanner.nextLine();
        System.out.print("Enter class name: ");
        className = scanner.nextLine();
        System.out.print("Enter phone number: ");
        phoneNumber = scanner.nextLine();
        System.out.print("Enter email: ");
        email = scanner.nextLine();
        System.out.print("Enter percentage: ");
        percentage = scanner.nextDouble();
    }

    public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public double getPercentage() {
		return percentage;
	}

	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}

	@Override
    public void save(Connection connection) throws SQLException {
        String sql = "INSERT INTO student (name, class, phonenumber, email, percentage) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, name);
            statement.setString(2, className);
            statement.setString(3, phoneNumber);
            statement.setString(4, email);
            statement.setDouble(5, percentage);
            statement.executeUpdate();

            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    id = generatedKeys.getInt(1);
                }
            }
        }
    }
	public static Student retrieve(Connection connection, int studentId) throws SQLException {
	    String sql = "SELECT * FROM student WHERE id = ?";
	    try (PreparedStatement statement = connection.prepareStatement(sql)) {
	        statement.setInt(1, studentId);
	        try (ResultSet resultSet = statement.executeQuery()) {
	            if (resultSet.next()) {
	                Student student = new Student();
	                student.setId(resultSet.getInt("id"));
	                student.setName(resultSet.getString("name"));
	                student.setClassName(resultSet.getString("class"));
	                student.setPhoneNumber(resultSet.getString("phonenumber"));
	                student.setEmail(resultSet.getString("email"));
	                student.setPercentage(resultSet.getDouble("percentage"));
	                return student;
	            }
	        }
	    }
	    return null; // Student with the given ID not found
	}
	public void update(Connection connection) throws SQLException {
	    String sql = "UPDATE student SET name = ?, class = ?, phonenumber = ?, email = ?, percentage = ? WHERE id = ?";
	    try (PreparedStatement statement = connection.prepareStatement(sql)) {
	        statement.setString(1, name);
	        statement.setString(2, className);
	        statement.setString(3, phoneNumber);
	        statement.setString(4, email);
	        statement.setDouble(5, percentage);
	        statement.setInt(6, id);
	        statement.executeUpdate();
	    }
	}
	public void delete(Connection connection) throws SQLException {
	    String sql = "DELETE FROM student WHERE id = ?";
	    try (PreparedStatement statement = connection.prepareStatement(sql)) {
	        statement.setInt(1, id);
	        statement.executeUpdate();
	    }
	}
   
}