FROM openjdk:17-jdk-slim
WORKDIR /app
# Copy only the Gradle wrapper and build files first for caching
COPY gradlew .
COPY gradle ./gradle
COPY build.gradle .
COPY settings.gradle .

# Copy the source code
COPY src ./src

# Build the project inside the container
RUN ./gradlew clean build -x test

CMD ["java", "-jar", "build/libs/analytics-consumer-0.0.1-SNAPSHOT.jar"]