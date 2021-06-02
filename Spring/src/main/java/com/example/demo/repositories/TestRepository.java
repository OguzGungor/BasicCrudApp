package com.example.demo.repositories;

import com.example.demo.models.TestEntity;
import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends CrudRepository<TestEntity,Integer> {
}
