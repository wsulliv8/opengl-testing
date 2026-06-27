cmake_minimum_required(VERSION 3.15)
project(LinuxOpenGLApp LANGUAGES C CXX)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Target modern C++ (matches our roadmap)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 1. Locate the installed GLFW3 package on your Linux system
find_package(glfw3 3.3 REQUIRED)

# 2. Locate the system's native OpenGL graphic drivers core
find_package(OpenGL REQUIRED)

# GLM (local copy at repo root)
add_subdirectory(${CMAKE_CURRENT_SOURCE_DIR}/../glm-1.0.3 ${CMAKE_BINARY_DIR}/glm)

# Define your executable
add_executable(gl_window main.cpp shader.cpp stb_image.cpp glad.c)

target_include_directories(gl_window PRIVATE include)

# 3. Link everything together cleanly
target_link_libraries(gl_window PRIVATE glfw OpenGL::GL glm::glm)