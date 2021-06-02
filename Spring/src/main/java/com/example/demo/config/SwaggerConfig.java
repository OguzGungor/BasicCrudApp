package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    public static final String CRUD_CONTROLLER = "CRUD related controllers";

    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.demo"))
                .build()
                .tags((new Tag(CRUD_CONTROLLER,"CRUD related controllers")))
                .apiInfo(apiInfo());
    }


    private ApiInfo apiInfo() {
        return new ApiInfo(
                "ToDoApp API",
                "API description for Simple ToDo app design with Spring Boot and couchbase.\n -Controller templates are shown below.\n -No authorization is included, so id fields should be filled with user id that is received from login request.",
                "v1",
                null,
                null,
                null, null, Collections.emptyList());
    }
}
