#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 tcoord = texcoord * 2.0 - 1.0;
    float theta = atan(tcoord.y, tcoord.x);
    float radius = pow(length(tcoord), 1.5);
    tcoord = vec2(radius*cos(theta), radius*sin(theta));
    
    FragColor = texture(image, ((tcoord+1.0)/2.0));
}
