//
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Date;
//import java.util.ArrayList;
//import java.util.List;
//
//public class Attendance {
//    private int id;
//    private int studentId;
//    private int teacherId;
//    private Date date;
//    private String status;
//public Attendance() {
//    public Attendance(int id, int studentId, int teacherId, Date date, String status) {
//        this.id = id;
//        this.studentId = studentId;
//        this.teacherId = teacherId;
//        this.date = date;
//        this.status = status;
//    }
//
//    // Getters and Setters
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public int getStudentId() {
//        return studentId;
//    }
//
//    public void setStudentId(int studentId) {
//        this.studentId = studentId;
//    }
//
//    public int getTeacherId() {
//        return teacherId;
//    }
//
//    public void setTeacherId(int teacherId) {
//        this.teacherId = teacherId;
//    }
//
//    public Date getDate() {
//        return date;
//    }
//
//    public void setDate(Date date) {
//        this.date = date;
//    }
//
//    public String getStatus() {
//        return status;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    // CRUD operations
//
//    public void save(Connection connection) throws SQLException {
//        String sql = "INSERT INTO attendance (studentid, teacherid, date, status) VALUES (?, ?, ?, ?)";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, studentId);
//            statement.setInt(2, teacherId);
//            statement.setDate(3, date);
//            statement.setString(4, status);
//            statement.executeUpdate();
//        }
//    }
//
//    public static Attendance getById(Connection connection, int id) throws SQLException {
//        String sql = "SELECT * FROM attendance WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, id);
//            try (ResultSet resultSet = statement.executeQuery()) {
//                if (resultSet.next()) {
//                    return new Attendance(
//                            resultSet.getInt("id"),
//                            resultSet.getInt("studentid"),
//                            resultSet.getInt("teacherid"),
//                            resultSet.getDate("date"),
//                            resultSet.getString("status")
//                    );
//                }
//            }
//        }
//        return null;
//    }
//
//    public static List<Attendance> getByStudentId(Connection connection, int studentId) throws SQLException {
//        List<Attendance> attendances = new ArrayList<>();
//        String sql = "SELECT * FROM attendance WHERE studentid = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, studentId);
//            try (ResultSet resultSet = statement.executeQuery()) {
//                while (resultSet.next()) {
//                    attendances.add(new Attendance(
//                            resultSet.getInt("id"),
//                            resultSet.getInt("studentid"),
//                            resultSet.getInt("teacherid"),
//                            resultSet.getDate("date"),
//                            resultSet.getString("status")
//                    ));
//                }
//            }
//        }
//        return attendances;
//    }
//
//    public void update(Connection connection) throws SQLException {
//        String sql = "UPDATE attendance SET studentid = ?, teacherid = ?, date = ?, status = ? WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, studentId);
//            statement.setInt(2, teacherId);
//            statement.setDate(3, date);
//            statement.setString(4, status);
//            statement.setInt(5, id);
//            statement.executeUpdate();
//        }
//    }
//
//    public void delete(Connection connection) throws SQLException {
//        String sql = "DELETE FROM attendance WHERE id = ?";
//        try (PreparedStatement statement = connection.prepareStatement(sql)) {
//            statement.setInt(1, id);
//            statement.executeUpdate();
//        }
//    }
//
//    public static List<Attendance> getAll(Connection connection) throws SQLException {
//        List<Attendance> attendances = new ArrayList<>();
//        String sql = "SELECT * FROM attendance";
//        try (PreparedStatement statement = connection.prepareStatement(sql);
//             ResultSet resultSet = statement.executeQuery()) {
//            while (resultSet.next()) {
//                attendances.add(new Attendance(
//                        resultSet.getInt("id"),
//                        resultSet.getInt("studentid"),
//                        resultSet.getInt("teacherid"),
//                        resultSet.getDate("date"),
//                        resultSet.getString("status")
//                ));
//            }
//        }
//        return attendances;
//    }
//}

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Attendance extends Person {
    private int studentId;
    private int teacherId;
    private java.sql.Date date;
    private String status;

    @Override
    public void readInput(Scanner scanner) {
        System.out.print("Enter student ID for attendance: ");
        studentId = scanner.nextInt();
        System.out.print("Enter teacher ID for attendance: ");
        teacherId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character
        System.out.print("Enter attendance status (Present/Absent): ");
        status = scanner.nextLine();
        date = new java.sql.Date(System.currentTimeMillis());
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public java.sql.Date getDate() {
        return date;
    }

    public void setDate(java.sql.Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public void save(Connection connection) throws SQLException {
        String sql = "INSERT INTO attendance (studentid, teacherid, date, status) VALUES (?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, studentId);
            statement.setInt(2, teacherId);
            statement.setDate(3, date);
            statement.setString(4, status);
            statement.executeUpdate();
        }
    }

    public static Attendance retrieve(Connection connection, int attendanceId) throws SQLException {
        String sql = "SELECT * FROM attendance WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, attendanceId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    Attendance attendance = new Attendance();
                    attendance.setId(resultSet.getInt("id"));
                    attendance.setStudentId(resultSet.getInt("studentid"));
                    attendance.setTeacherId(resultSet.getInt("teacherid"));
                    attendance.setDate(resultSet.getDate("date"));
                    attendance.setStatus(resultSet.getString("status"));
                    return attendance;
                }
            }
        }
        return null; // Attendance with the given ID not found
    }

    public void update(Connection connection) throws SQLException {
        String sql = "UPDATE attendance SET studentid = ?, teacherid = ?, date = ?, status = ? WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, studentId);
            statement.setInt(2, teacherId);
            statement.setDate(3, date);
            statement.setString(4, status);
            statement.setInt(5, id);
            statement.executeUpdate();
        }
    }

    public void delete(Connection connection) throws SQLException {
        String sql = "DELETE FROM attendance WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, id);
            statement.executeUpdate();
        }
    }

    public static void displayAttendancePercentage(Connection connection) throws SQLException {
        String sql = "SELECT s.id as student_id, s.name as student_name, " +
                     "COUNT(CASE WHEN a.status = 'Present' THEN 1 END) as present_count, " +
                     "COUNT(*) as total_count, " +
                     "COUNT(CASE WHEN a.status = 'Present' THEN 1 END) * 100.0 / COUNT(*) as attendance_percentage " +
                     "FROM attendance a " +
                     "JOIN student s ON a.studentid = s.id " +
                     "GROUP BY s.id, s.name";

        try (PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {
            System.out.println("Student ID\tStudent Name\tAttendance Percentage");
            while (resultSet.next()) {
                int studentId = resultSet.getInt("student_id");
                String studentName = resultSet.getString("student_name");
                double attendancePercentage = resultSet.getDouble("attendance_percentage");
                System.out.println(studentId + "\t\t" + studentName + "\t\t" + attendancePercentage + "%");
            }
        }
    }
}