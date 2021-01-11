# Augmentor can be installed from Augmentor website to apply different transformations to images in a certain path on the computer
# Here is examples of how code for it would be written
# It was used to increase dataset by skewing pictures

import Augmentor

p = Augmentor.Pipeline("C:/Users/Ali/Documents/April 2020/Training Images Example")

p.rotate90(probability = 0.5)
p.rotate270(probability = 0.5)
p.flip_left_right(probability = 0.8)
p.flip_top_bottom(probability = 0.3)
p.skew(probability = 0.6)
p.sample(5000)
