package com.example.demo.controllers;

import com.example.demo.config.SwaggerConfig;
import com.example.demo.models.TestEntity;
import com.example.demo.services.TestService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/crud")
@Api(tags = {SwaggerConfig.CRUD_CONTROLLER})
public class CrudController {

    @Autowired
    private TestService service;

    @GetMapping("/all")
    public List<TestEntity> all(){
        System.out.println("[READ ALL]");
        return service.getAll();
    }

    @PostMapping("/create")
    public TestEntity create(@RequestBody TestEntity entity){
        System.out.println("[CREATE] : " + entity);
        return service.create(entity);
    }

    @GetMapping("/read")
    public TestEntity read(@RequestParam int id){

        System.out.println("[READ] : read for id - " + id );
        return service.read(id);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody int id){
        System.out.println("[DELETE] : delete for id - " + id);
        service.delete(id);
    }
}
