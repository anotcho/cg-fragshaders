#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 inColor = vec3(texture(image, texcoord));
    vec3 outColor;
    outColor.x = round(4.0 * inColor.x) / 4.0;
    outColor.y = round(4.0 * inColor.y) / 4.0;
    outColor.z = round(4.0 * inColor.z) / 4.0;

    FragColor = vec4(outColor, 1.0);
}
