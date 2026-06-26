#version 330 core
out vec4 FragColor;

in vec2 ourTexCoord;
in vec3 ourColor;

uniform sampler2D ourTexture;
uniform sampler2D ourTexture1;

void main() { FragColor = mix(texture(ourTexture, ourTexCoord), texture(ourTexture1, ourTexCoord), 0.2); }
