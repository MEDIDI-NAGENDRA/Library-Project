package com.nagendra.library.dao;



import com.nagendra.library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;




public interface BookRepository extends JpaRepository<Book,Long> {

}