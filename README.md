genomefeatures
===============================

Genome Features Widget Library

Installation
------------

To install use pip:

    pip3 install genomefeatures
    jupyter nbextension enable --py --sys-prefix genomefeatures


For a development installation (requires npm),

    git clone https://github.com/bbop/genomefeatures.git
    cd genomefeatures
    pip3 install -e .
    jupyter nbextension install --py --symlink --sys-prefix genomefeatures
    jupyter nbextension enable --py --sys-prefix genomefeatures

Using python3 load notebook jupyter notebook:

    from genomefeatures import *
	HelloWorld()
