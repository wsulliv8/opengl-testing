cmake_minimum_required(VERSION 3.15)
project(LinuxOpenGLApp LANGUAGES C CXX)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(glfw3 3.3 REQUIRED)
find_package(OpenGL REQUIRED)

add_subdirectory(${CMAKE_CURRENT_SOURCE_DIR}/../glm-1.0.3 ${CMAKE_BINARY_DIR}/glm)

# Asset paths resolve from the project root via learnopengl/filesystem.h
set(LOGL_ROOT "${CMAKE_CURRENT_SOURCE_DIR}")
configure_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/cmake/root_directory.h.in
    ${CMAKE_BINARY_DIR}/generated/root_directory.h
)

set(COMMON_LIBS glfw OpenGL::GL glm::glm)
set(COMMON_INCLUDES
    ${CMAKE_CURRENT_SOURCE_DIR}/include
    ${CMAKE_BINARY_DIR}/generated
)

# --- gl_window (src/start) ---
add_executable(gl_window
    src/start/main.cpp
    src/start/shader.cpp
    src/stb_image.cpp
    src/glad.c
)

target_include_directories(gl_window PRIVATE
    ${COMMON_INCLUDES}
    ${CMAKE_CURRENT_SOURCE_DIR}/src/start
)
target_link_libraries(gl_window PRIVATE ${COMMON_LIBS})

# --- depth_testing (src/depth_testing) ---
add_executable(depth_testing
    src/depth_testing/depth_testing.cpp
    src/stb_image.cpp
    src/glad.c
)

target_include_directories(depth_testing PRIVATE ${COMMON_INCLUDES})
target_link_libraries(depth_testing PRIVATE ${COMMON_LIBS})
