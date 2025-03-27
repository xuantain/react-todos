FROM openjdk:17-jdk-slim

WORKDIR /app

COPY api/todo.jar /app/todo.jar

EXPOSE 8080

CMD ["java", "-jar", "todo.jar"]