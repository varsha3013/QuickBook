package com.sgt.booking.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Repository

public class UserRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public int registerUser(String username,String password,String email,String fullname,String mobile)
    {

        return jdbcTemplate.update("EXEC dbo.sp_register ?,?,?,?,?",username,password,email,fullname,mobile);


    }

    public Map<String,Object> LoginUser(String username, String password)
    {

        return jdbcTemplate.queryForMap("EXEC dbo.sp_login ?,?",username,password);

    }


    public int insertBooking(int userId,int categoryId, String timeSelected)
    {
        return jdbcTemplate.update("EXEC [dbo].[sp_insert_booking] ?,?,?",userId,categoryId,timeSelected);

    }

    public int registerWorker(String name,String email,String password,String contact_number,String category, String document)
    {

        return jdbcTemplate.update("EXEC dbo.sp_register_worker ?,?,?,?,?,?",name, email,password,contact_number,category,document);


    }

    public String getUserEmailById(int userId) {
        String sql = "EXEC dbo.sp_fetch_email_by_userid ?";
        List<String> emails = jdbcTemplate.query(sql, new Object[]{userId}, (rs, rowNum) -> rs.getString("email"));
        return emails.isEmpty() ? null : emails.get(0);
    }

}
