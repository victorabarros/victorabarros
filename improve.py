from numpy import cos, sin, e, pi, linspace
import numpy as np
import matplotlib.pyplot as plt
import pdb; pdb.set_trace()
z = linspace(-200,0,100)
V0 = 1.314
a = 0.013738
u = V0*cos(a*z + pi/4)*e*(a*z)
v = V0*sin(a*z + pi/4)*e*(a*z)
n = -2
color = np.sqrt(((v-n)/2)*2 + ((u-n)/2)*2)
plt.figure(1)
plt.plot(u,v)
plt.figure(2)
plt.quiver(u,v,color,scale=1)
plt.colorbar()
plt.show()
