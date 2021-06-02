package com.example.demo.services;

import com.example.demo.models.TestEntity;
import com.example.demo.repositories.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {

    @Autowired
    private TestRepository repo;

    public List<TestEntity> getAll(){
        return (List)repo.findAll();
    }

    public TestEntity create(TestEntity entity){
        return repo.save(entity);
    }

    public TestEntity read(int id){
        return repo.findById(id).orElseThrow(null);
    }

    public void delete(int id){
        repo.delete(repo.findById(id).orElseThrow(null));
    }



}
