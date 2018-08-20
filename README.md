genomefeatures
===============================

Genome Features Widget Library

Installation
------------

For a development installation (requires npm),

    git clone https://github.com/bbop/genomefeatures.git
    cd genomefeatures
    pip3 install -e .
    jupyter nbextension install --py --symlink --sys-prefix genomefeatures
    jupyter nbextension enable --py --sys-prefix genomefeatures

Using python3 load notebook jupyter notebook:

    from genomefeatures import *
	HelloWorld()


To update only the JS:

    pip3 install -e .

And then reload the current book. 

To install on production (when ready) use pip:

    pip3 install genomefeatures
    jupyter nbextension enable --py --sys-prefix genomefeatures

