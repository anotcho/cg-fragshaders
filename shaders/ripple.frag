#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 tcoord = (2.0 * texcoord) - 1.0;
    float radius = length(tcoord);
    vec2 offset = tcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    tcoord = tcoord + offset;
    tcoord = (tcoord + 1.0) * 0.5;

    FragColor = texture(image, tcoord);
}
