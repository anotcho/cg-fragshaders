#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 inColor = texture(image, texcoord);
    double L = 0.299 * inColor.r + 0.587 * inColor.g + 0.114 * inColor.b;
    FragColor = vec4(L, L, L, 1.0);
}
